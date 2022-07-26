import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props

  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list-items">
      <button
        className="denomination-btn"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
