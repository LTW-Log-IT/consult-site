export const stages = [
  { n: 1, name: 'Strategy', what: 'We confirm which customers, missions, and contract types fit your company, so the pipeline is built on a deliberate target list instead of whatever shows up in a search feed.', get: 'A short target-market statement and pursuit criteria.' },
  { n: 2, name: 'Identify', what: 'We find and log opportunities that match your criteria early, from forecasts, pre-solicitation notices, and customer engagement, before the RFP drops.', get: 'A pipeline entry for each opportunity with source, timing, and fit notes.' },
  { n: 3, name: 'Qualify (go/no-go)', what: 'We score the opportunity against your capability, customer access, competition, teaming position, and resources. You decide go or no-go with the facts in front of you.', get: 'A completed go/no-go scorecard and a recommendation.', gate: 'Gate: go/no-go' },
  { n: 4, name: 'Capture', what: 'We build the plan to win: customer needs, competitor view, win themes, and the actions and owners needed before the solicitation releases.', get: 'A capture plan with an action list and owners.' },
  { n: 5, name: 'Teaming', what: 'We identify the gaps your company cannot cover alone and work through prime/sub roles, partner fit, and workshare before agreements are signed.', get: 'A teaming tracker with partner status and open items.' },
  { n: 6, name: 'Solution', what: 'We shape the technical and management approach so it answers what the customer actually needs and can be staffed and delivered.', get: 'A solution outline tied to customer requirements and win themes.' },
  { n: 7, name: 'Proposal', what: 'We organize the response: compliance matrix, outline, writing assignments, and color-team reviews, so the team writes to the evaluation criteria.', get: 'A compliance matrix, annotated outline, and review findings.', gate: 'Gate: bid/no-bid before proposal' },
  { n: 8, name: 'Submit', what: 'We run a final review against the instructions and evaluation criteria and confirm the package is complete and on time.', get: 'A submission checklist and final review sign-off.', gate: 'Gate: submit review' },
  { n: 9, name: 'Orals / negotiation', what: 'If the customer calls for orals, discussions, or clarifications, we help you prepare, rehearse, and respond consistently with the proposal.', get: 'Prep materials, rehearsal feedback, and response drafts.' },
  { n: 10, name: 'Award / debrief', what: 'Win or lose, we help you request and prepare for the debrief so you capture what the evaluators saw.', get: 'Debrief questions and a summary of findings.' },
  { n: 11, name: 'Lessons learned', what: 'We run an after-action review on what worked and what did not, and feed it back into your criteria, templates, and gates.', get: 'An after-action report with specific changes to your process.' },
  { n: 12, name: 'Handoff to delivery', what: 'On a win, we hand the commitments made in the proposal to the delivery team so nothing promised gets lost at startup.', get: 'A handoff package: commitments, key personnel, and open risks.' },
];

export const engagements = [
  {
    id: 'bid-decision-sprint',
    name: 'Bid decision sprint',
    tag: 'Go/no-go on one opportunity',
    who: 'A small business or capture team looking at one specific opportunity and needing a clear decision before committing proposal resources.',
    get: 'A structured qualification of the opportunity against your capability, customer access, competition, teaming position, and available resources, ending in a go or no-go recommendation.',
    output: 'Completed go/no-go scorecard, key risks and gaps, and a short recommendation memo.',
  },
  {
    id: 'capture-plan',
    name: 'Capture plan',
    tag: 'Plan to win before the RFP',
    who: 'A team that has decided to pursue and wants a disciplined plan between the go decision and the solicitation.',
    get: 'Customer needs, competitive view, win themes, teaming approach, and the actions and owners needed to be positioned when the RFP releases.',
    output: 'Capture plan document with an action list, owners, and dates.',
  },
  {
    id: 'proposal-support',
    name: 'Proposal support or review-only',
    tag: 'Color-team style review',
    who: 'A team writing a response that wants hands-on proposal management help, or an independent review of a draft.',
    get: 'Either support organizing and managing the response (compliance matrix, outline, assignments, schedule) or a review-only engagement that evaluates your draft against the instructions and evaluation criteria.',
    output: 'Compliance matrix and annotated outline, or written color-team review findings with prioritized fixes.',
  },
  {
    id: 'bd-system-standup',
    name: 'BD system stand-up',
    tag: 'Pipeline, gates, dashboards, teaming tracker',
    who: 'A company pursuing work without a repeatable BD process, or one whose pipeline lives in inboxes and spreadsheets nobody trusts.',
    get: 'A working BD operating system: a pipeline with defined stages, stage gates with decision criteria, simple dashboards, and a teaming tracker your team can keep running.',
    output: 'Configured pipeline and stage definitions, gate criteria and scorecards, dashboard views, and a teaming tracker.',
  },
  {
    id: 'win-loss-after-action',
    name: 'Win/loss after-action',
    tag: 'Lessons learned you can use',
    who: 'A team that just won or lost a bid and wants to understand why before the next one.',
    get: 'A structured review of the pursuit from qualification through debrief, focused on decisions and process rather than blame.',
    output: 'After-action report with findings and specific changes to your criteria, templates, and gates.',
  },
];

// Open question for Joe: registration readiness guidance ships hidden until CAGE is active
// or Joe approves guidance-only wording.
export const showRegistrationReadiness = false;

export type Service = {
  id: string; name: string; line: string; group: string;
  who: string; what: string; get: string; note?: string; optional?: boolean;
};

export const serviceGroups = ['Find and qualify', 'Position and team', 'Respond', 'Present and sustain'];

const allServices: Service[] = [
  {
    id: 'opportunity-identification', group: 'Find and qualify', name: 'Opportunity identification',
    line: 'Research SAM.gov notices, agency forecasts, and pre-solicitation activity to build a pipeline that matches what you actually do.',
    who: 'Companies that want a steady, relevant pipeline instead of reacting to whatever appears in a search feed.',
    what: 'We research SAM.gov notices, agency forecasts, and pre-solicitation activity against a target list built around your capabilities.',
    get: 'Pipeline entries with source, timing, and fit notes, plus a target-agency list.',
  },
  {
    id: 'bid-no-bid', group: 'Find and qualify', name: 'Bid/no-bid qualification',
    line: 'Score each opportunity on fit, customer access, competition, and resources so you decide with facts before committing writers.',
    who: 'Teams looking at a specific opportunity who need a clear decision before committing proposal resources.',
    what: 'We score the opportunity on fit, customer access, competition, teaming position, and resources, and walk you through the result.',
    get: 'A completed scorecard and a recommendation.',
  },
  {
    id: 'capture', group: 'Position and team', name: 'Capture planning',
    line: 'Plan the win before the RFP: customer needs, competitor view, win themes, and an action list with owners.',
    who: 'Teams that have decided to pursue and want a disciplined plan between the decision and the solicitation.',
    what: 'We work through customer needs, the competitive view, win themes, and the actions needed before the RFP releases.',
    get: 'A capture plan with actions and owners.',
  },
  {
    id: 'teaming', group: 'Position and team', name: 'Teaming partners and agreements',
    line: 'Identify partners who close your capability gaps, sort out prime/sub roles and workshare, and prepare for teaming agreement discussions.',
    who: 'Companies that need partners to cover capability gaps, want to sub to a prime, or are moving toward prime roles.',
    what: 'We identify partners who close your gaps, sort out prime/sub roles and workshare, and help you prepare for teaming agreement discussions.',
    get: 'A partner shortlist, teaming tracker, role and workshare outline, and discussion points for the teaming agreement.',
    note: 'We help you prepare for teaming agreement discussions. We are not a law firm; have your attorney review any agreement before signing.',
  },
  {
    id: 'proposal-development', group: 'Respond', name: 'Proposal development',
    line: 'Proposal management, writing, compliance matrix, outlines, and color-team style reviews built around the evaluation criteria.',
    who: 'Teams responding to a solicitation that want hands-on management and writing support.',
    what: 'We manage the response with your subject-matter experts: compliance matrix, outline, assignments, schedule, writing, and color-team style reviews built around the evaluation criteria.',
    get: 'A compliance matrix, annotated outline, writing assignments and schedule, drafts, and review findings.',
  },
  {
    id: 'rfi-sources-sought', group: 'Respond', name: 'RFI and sources-sought responses',
    line: 'Clear, specific responses that tell the contracting officer what you can do, and help shape set-aside decisions early.',
    who: 'Companies that see an RFI or sources-sought notice in their lane and want to be visible early.',
    what: 'We draft a clear, specific response that tells the contracting officer what you can do and can help shape set-aside decisions early.',
    get: 'A response tailored to the notice.',
  },
  {
    id: 'proposal-review', group: 'Respond', name: 'Proposal review only',
    line: 'An independent color-team style review of your draft against the instructions and evaluation criteria.',
    who: 'Teams that write their own proposals and want an independent review before submission.',
    what: 'We review your draft against the instructions and evaluation criteria, color-team style.',
    get: 'Written color-team style findings with prioritized fixes.',
  },
  {
    id: 'capability-statements', group: 'Present and sustain', name: 'Capability statements',
    line: 'A one-page capability statement written for government buyers and prime contractors, with core competencies, differentiators, and company data.',
    who: 'Companies that need a clear one-page introduction for government buyers and prime contractors.',
    what: 'We write a capability statement with your core competencies, differentiators, and company data.',
    get: 'A one-page capability statement, with editable source and PDF.',
  },
  {
    id: 'marketing-materials', group: 'Present and sustain', name: 'Marketing materials',
    line: 'Company overview, teaming one-pager, and outreach messaging so every partner and buyer touchpoint says the same thing.',
    who: 'Companies whose outreach to partners and buyers is inconsistent or out of date.',
    what: 'We write consistent materials for partner and buyer outreach.',
    get: 'A company overview, teaming one-pager, and outreach email templates.',
  },
  {
    id: 'bd-system', group: 'Present and sustain', name: 'BD system and pipeline setup',
    line: 'A working pipeline with stages, decision gates, a teaming tracker, and simple reporting your team can keep up.',
    who: 'Companies pursuing work without a repeatable BD process, or whose pipeline lives in inboxes and spreadsheets.',
    what: 'We set up a pipeline with defined stages, decision gates, a teaming tracker, and simple reporting your team can keep running.',
    get: 'A configured pipeline, stage and gate definitions, teaming tracker, and simple dashboard.',
  },
  {
    id: 'registration-readiness', group: 'Present and sustain', name: 'Registration readiness guidance', optional: true,
    line: 'A checklist walkthrough of what SAM.gov registration and related profiles require, so nothing stalls when an opportunity appears. Guidance only. We do not file on your behalf.',
    who: 'Companies preparing to register or update their federal profiles.',
    what: 'A checklist walkthrough of what SAM.gov registration and related profiles require. Guidance only. We do not file on your behalf.',
    get: 'A readiness checklist and walkthrough (guidance only).',
  },
];

export const services = allServices.filter((s) => !s.optional || showRegistrationReadiness);

// Homepage grid order per brief (Proposal review only appears on /services/ and in the form).
export const homeServiceIds = ['opportunity-identification', 'bid-no-bid', 'capture', 'teaming', 'proposal-development', 'rfi-sources-sought', 'capability-statements', 'marketing-materials', 'bd-system', 'registration-readiness'];

export const processSteps = [
  { n: 1, name: 'Identify', short: 'find opportunities that fit.', what: 'Search SAM.gov notices, agency forecasts, and pre-solicitation activity against your target list.', get: 'Pipeline entries.' },
  { n: 2, name: 'Qualify', short: 'make the bid/no-bid call early.', gate: 'Gate: bid/no-bid', tag: 'decision gate', what: 'Score fit, customer access, competition, teaming position, and resources.', get: 'Scorecard and recommendation.' },
  { n: 3, name: 'Capture', short: 'position before the RFP.', what: 'Work through customer needs, the competitor view, win themes, and pre-RFP actions.', get: 'Capture plan.' },
  { n: 4, name: 'Team', short: 'fill gaps with the right partners.', what: 'Gap analysis, partner shortlist, roles and workshare, and preparation for the teaming agreement.', get: 'Teaming tracker.' },
  { n: 5, name: 'Propose', short: 'write to the evaluation criteria.', what: 'Compliance matrix, outline, assignments, writing, and color-team style reviews.', get: 'Compliant draft and review findings.' },
  { n: 6, name: 'Submit', short: 'final compliance check, on time.', gate: 'Gate: compliance check', tag: 'compliance check', what: 'Final review against the instructions and evaluation criteria, plus a submission checklist.', get: 'Sign-off checklist.' },
  { n: 7, name: 'Debrief', short: 'learn from every result, win or lose.', what: 'Request and prepare for the debrief, then feed the lessons back into your criteria and templates.', get: 'Debrief questions and a short after-action summary.' },
];
