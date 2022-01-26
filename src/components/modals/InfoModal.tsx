import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
      Besykje it WURDLE yn 6 kear te rieden.
      Nei eltse gok feroarjen de kleuren fan 'e tegels.
      Dit lit sjen hoe ticht dyn gok by it WURDLE siet.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="J" />
        <Cell value="O" />
        <Cell value="C" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500">
        De letter S sit yn it wurd en stiet goed.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="L" status="present"/>
        <Cell value="T" />
        <Cell value="S" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500">
        De letter L sit yn it wurd mar stiet net goed.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="O" />
        <Cell value="P" />
        <Cell value="N" />
        <Cell value="I" status="absent" />
        <Cell value="J" />
      </div>
      <p className="text-sm text-gray-500">
        De letter I sit net yn it wurd.
      </p>
    </BaseModal>
  )
}
