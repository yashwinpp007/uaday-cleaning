import { Phone } from 'lucide-react'
import { BUSINESS_PHONE_E164, BUSINESS_PHONE } from '@/lib/site'

// Sits just to the left of the chat launcher (bottom-5 right-5, 64px) so
// neither it nor the chat panel (which opens above the launcher) overlap it.
export default function CallButton() {
  return (
    <a
      href={`tel:${BUSINESS_PHONE_E164}`}
      aria-label={`Call UDAY Cleaning on ${BUSINESS_PHONE}`}
      title={`Call ${BUSINESS_PHONE}`}
      className="fixed bottom-5 right-[5.75rem] z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white shadow-card hover:bg-brand-green-dark transition-colors active:scale-95"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
