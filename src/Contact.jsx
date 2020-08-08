import React, { useState } from "react";

const Contact =() => {

	const [data, setData] = useState({
		fullname:"",
		phone:"",
		email:"",
		msg:"",
	});

		const InputEvent = (event) => {
			const {name, value} = event.target;
				setData((preVal) => {
					return {
						...preVal,
						[name] : value,
					};
				});

		};

		const formSubmit = (e) => {
			e.preventDefault();
			alert(`My name is ${data.fullname}, E-mail: ${data.email}. Phone: ${data.phone}. My message: ${data.msg}`);
		};

			return (
					< >
						<div className="my-5">
							<h1 className="text-center">Hubungi kami</h1>
						</div>
						<div className="container contact-div">
							<div className="row">
								<div className="col-md-6 col-10 mx-auto">
									<form onSubmit={formSubmit}>
										  <div class="mb-3">
										    <label for="exampleFormControlInput1" class="form-label">Nama</label>
										    <input type="text" 
											    class="form-control" 
											    id="exampleFormControlInput1" 
											    name="fullname" 
											    value={data.fullname} 
											    onChange={InputEvent} 
											    placeholder="Masukan Nama Anda" />
										  </div>
										  <div class="mb-3">
										    <label for="exampleFormControlInput1" class="form-label">No. HP</label>
										    <input type="number" 
											    class="form-control" 
											    id="exampleFormControlInput1" 
											    name="phone" 
											    value={data.phone} 
											    onChange={InputEvent} 
											    placeholder="No HP" />
										  </div>
										  <div class="mb-3">
										    <label for="exampleFormControlInput1" class="form-label">E-mail</label>
										    <input type="email" 
											    class="form-control" 
											    id="exampleFormControlInput1" 
										    	name="email" 
										    	value={data.email} 
										    	onChange={InputEvent} 
										    	placeholder="example: ims@gmail.com" />
										  </div>
										  <div class="mb-3">
										    <label for="exampleFormControlTextarea1" class="form-label">Pesan</label>
										    <textarea class="form-control" 
											    id="exampleFormControlTextarea1" 
											    name="msg" 
											    value={data.msg} 
											    onChange={InputEvent} 
											    rows="3" />
										  </div>
										  <div className="col-12">
										  	<button className="btn btn-outline-primary" type="submit">Kirim</button>
										  </div>
										  
									</form>
								</div>
							</div>
						</div>
					</>
		);
};
export default Contact;