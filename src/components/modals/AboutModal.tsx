import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Oer Wurdle" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Dit is een Fryske verzje fan Wordle. Oersette en fersoarge troch{' '}
        <a
          href="https://www.twitter.com/BAJansen"
          className="underline font-bold"
        >
          Bernardus Jansen
        </a>{' '}
        <br />
        De koade dy't brûkt is kinst{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          hjir fine
        </a>{' '}
        en it Ingelske orizjineel kinst{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          hjir spylje
        </a>
      </p>
    </BaseModal>
  )
}
