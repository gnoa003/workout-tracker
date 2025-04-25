import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Progress() {
  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Progress Tracking</h1>
        <p className="text-gray-600 mb-8">Click below to view the progress tracking prototype</p>
        <a
          href="https://balsamiq.cloud/sibt67b/pnul00s"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Progress Prototype
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
} 