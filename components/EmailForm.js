'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function EmailForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      // FIRST EMAIL
      // Auto reply TO CLIENT
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      // SECOND EMAIL
      // Notification TO COMPANY
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setSuccess(true)
      e.target.reset()
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={sendEmail} className="space-y-6">

        <input
          name="from_name"
          type="text"
          placeholder="Name"
          required
          className="w-full border border-[#AAAAAA] bg-white px-4 py-2 text-[24px] font-bold"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border border-[#AAAAAA] bg-white px-4 py-2 text-[24px] font-bold"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full resize-none border border-[#AAAAAA] bg-white px-4 py-2 text-[24px] font-bold"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#830033] px-6 py-3 text-[20px] font-bold text-white transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {success && (
          <p className="font-semibold text-green-600">
            Message sent successfully!
          </p>
        )}

        {error && (
          <p className="font-semibold text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}