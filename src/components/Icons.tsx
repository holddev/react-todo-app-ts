interface Props {
  className: string
}
export const CloseSVG: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
    </svg>
  )
}