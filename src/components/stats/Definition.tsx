type Props = {
  geefWurd: Object
  definition: string[]
  loading: boolean
}

export const Definition = ({ geefWurd, definition, loading }: Props) => {
  return (
    <div>
      {loading && <h5>Oersetting laden...</h5>}
      {!loading && (
        <>
          <h5>
            {Object.values(geefWurd)[0].toString().charAt(0).toUpperCase() +
              Object.values(geefWurd)[0].toString().substring(1) +
              ':'}
          </h5>
          <span className="font-large text-gray-900 dark:text-gray-100">
            {typeof Object.values(definition)[1] === 'string' &&
              Object.values(definition)[1]}
            {typeof Object.values(definition)[1] === 'object' &&
              definition.map((item) => Object.values(item)[1] + ', ')}
          </span>
        </>
      )}
    </div>
  )
}
