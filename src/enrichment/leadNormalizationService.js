/**
 * Lead Deduplication & Normalization Service
 * Cleans extracted contact records, scores lead fit, and transforms into CRM-ready JSON schema.
 */

export class LeadNormalizationService {
  normalizeRecord(rawLead) {
    return {
      companyName: this.cleanCompanyName(rawLead.domain),
      domain: rawLead.domain.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, ''),
      verifiedContacts: rawLead.contactEmails.map(email => ({
        email: email.toLowerCase().trim(),
        isCorporate: !email.includes('gmail.com') && !email.includes('yahoo.com'),
      })),
      techStack: rawLead.technologiesDetected,
      fitScore: this.calculateFitScore(rawLead),
      ingestedAt: new Date().toISOString()
    };
  }

  cleanCompanyName(domain) {
    const base = domain.replace(/^(https?:\/\/)?(www\.)?/, '').split('.')[0];
    return base.charAt(0).toUpperCase() + base.slice(1);
  }

  calculateFitScore(lead) {
    let score = 50;
    if (lead.contactEmails.some(e => !e.includes('gmail.com'))) score += 30;
    if (lead.technologiesDetected.length > 0) score += 20;
    return Math.min(score, 100);
  }
}
