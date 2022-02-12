type Props = {
  geefWurd: Object
  definition: string[]
  loading: boolean
}

export const Definition = ({ geefWurd, definition, loading }: Props) => {
  return (
    <div>
      {loading && <div>Oersetting laden</div>}
      {!loading && (
        <>
          <div>
            <h5>
              {Object.values(geefWurd)[0].toString().charAt(0).toUpperCase() +
                Object.values(geefWurd)[0].toString().substring(1) +
                ':'}
            </h5>
          </div>
          <span className="text-lg font-small text-gray-900 dark:text-gray-100">
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
