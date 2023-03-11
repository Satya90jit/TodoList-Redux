return <div className=" h-100 w-100 d-flex align-items-center justify-content-center">
<form  className=" h-50 w-75">
<div className="container  shadow mt-5 mb-5 p-5 bg-danger">
  <h1  className="text-center text-white m-3">Todo List App</h1>
  <div  className="mb-3 d-flex">

  <input type='text' value={content} 
    name='content'  className="form-control"
    onChange={handleChange}>
  </input>
  <button type='submit' className="btn btn-warning ms-3" 
    onClick={add}>Add
  </button>
    </div>
  {/* {contentError ?  */}
     {/* <div className='error'><p>You must write something!</p></div> */}
    {/* //  : null} */}
    </div>
</form>
</div>
