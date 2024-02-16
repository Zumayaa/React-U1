function Input({ label, type, disabled }) {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type={type} disabled={disabled} />
        </>
    );
}


export default Input;