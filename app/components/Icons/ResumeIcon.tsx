interface ResumeIconProps {
  className?: string;
}

export default function ResumeIcon({ className = "w-5 h-5" }: ResumeIconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}
