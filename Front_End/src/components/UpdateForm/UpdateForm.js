function UpdateForm({onSubmit, formData, onChange}) {
    // function onChange(e) {
    //     console.log(e.target.name);        
    // }
    return (  
        <form onSubmit={onSubmit}>
            <input type="text" value={formData.title} name="title" onChange={onChange} />
            <textarea value={formData.description} name="description" onChange={onChange} />
            <input type="text" value={formData.style} name="style" onChange={onChange} />
            <button>Valider</button>
        </form>
    );
}

export default UpdateForm;