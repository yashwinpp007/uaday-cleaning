import type Anthropic from '@anthropic-ai/sdk'

// Tool Claude calls once it has enough information to hand a warm lead to the
// UDAY Cleaning team. See lib/chatbot/notify.ts for what happens with the result.
export const CAPTURE_LEAD_TOOL: Anthropic.Tool = {
  name: 'capture_lead',
  description:
    "Record a visitor's enquiry so the UDAY Cleaning team can follow up. " +
    'Call this once per conversation, only after the visitor has given you ' +
    'at least a name and one way to contact them (phone or email).',
  input_schema: {
    type: 'object',
    properties: {
      name: { type: 'string', description: "Visitor's name" },
      phone: { type: 'string', description: 'Visitor phone number, if given' },
      email: { type: 'string', description: 'Visitor email address, if given' },
      suburb: { type: 'string', description: 'Suburb or address of the property, if given' },
      service: {
        type: 'string',
        description:
          'Which service they want, e.g. Residential Cleaning, Commercial Cleaning, ' +
          'End of Lease Cleaning, Deep/Spring Cleaning, or an add-on',
      },
      timeframe: { type: 'string', description: 'Preferred date/timeframe, if given' },
      notes: {
        type: 'string',
        description:
          'Anything else useful for the team: property size, urgency, whether this is ' +
          'a complaint/re-clean request, allergy/product preferences, etc.',
      },
      is_urgent: {
        type: 'boolean',
        description: 'True if this is a complaint, dispute, or same-day/urgent request that needs prompt human follow-up.',
      },
    },
    required: ['name'],
  },
}

export interface CapturedLead {
  name: string
  phone?: string
  email?: string
  suburb?: string
  service?: string
  timeframe?: string
  notes?: string
  is_urgent?: boolean
}
