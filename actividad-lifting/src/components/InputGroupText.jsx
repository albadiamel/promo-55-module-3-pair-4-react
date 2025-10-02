import 'react'

const InputGroupText = () => {

    return (
    <div className="input-group-text">
        <label className="label-text" htmlFor="name">
              Escribe un nombre:
        </label>
            <input
              className="input-text"
              type="text"
              name="name"
              id="name"
              placeholder="María García"
              value={name}
              onChange={handleName}
            />
    </div>

    )
}
export default InputGroupText