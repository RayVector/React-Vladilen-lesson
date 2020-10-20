import React, {useContext} from "react";
import PropTypes from 'prop-types'
import Context from "../../context";

const styles = {
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({item, index, onChange}) {
  const {removeTodo} = useContext(Context);
  const classes = [];

  if (item.completed) classes.push('done');

  return (
    <li>
      <label style={styles.label}>
        <span className={classes.join(' ')}>
          <input
            type="checkbox"
            style={styles.input}
            checked={item.completed}
            onChange={() => onChange(item.id)}
          />
          <strong>{index + 1}) </strong>
          <span>{item.title}</span>
        </span>

        <button className='btn-remove' onClick={removeTodo.bind(null, item.id)}>
          &times;
        </button>
      </label>
    </li>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem

