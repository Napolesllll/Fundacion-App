import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom'; 
import logo from '../img/log1.png'

import './Contact.css'

const Formulario = () => {

	const [formEnviado, cambiarFormEnviado] = useState(false);
	
	return(
	 <div>
		 <Link to='/home'>
			<div className='logoContact'>
				<img src={logo} />
				
			</div>
		 </Link>
		 <Link to='/home'>
				<button className='ButtonRegresar'>Regresar</button>
			</Link>
		< div className='contenedor '>
		<Formik
			initialValues={{
				nombre:'',
				correo:'' 
			}}
			validate={(valores) => {
				let errores = {}

				//validacion nombre
				if(!valores.nombre){
					errores.nombre = 'Porfavor ingrese un nombre'
				}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre solo puede tener letras y espacios'
				}

				//validacion correo
				if(!valores.correo){
					errores.correo = 'Porfavor ingrese un correo'
				}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
					errores.correo = 'El correo solo puede contener letras, numeros, puntos y guiones y guion bajo.'
				}
				return errores
			}}
			onSubmit={(valores, {resetForm} ) => {
				resetForm()	
				cambiarFormEnviado(true)
				setTimeout(()=> cambiarFormEnviado(false), 4000)
			}}
		>
{ ({ values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
	<Form className='formulario' onSubmit={handleSubmit}>
		
	  <div>
	  
		  <label htmlfor='nombre'>Nombre</label>
		  <Field
			   type='text' 
			   id='nombre' 
			   name='nombre'
			   placeholder='Name' 
			   value={values.nombre}
			   onChange={handleChange}
			   onBlur={handleBlur}
		  />	   
	  {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}	
	  </div>
	  <div>
		  <label htmlfor='corrreo'>Correo</label>
		  <Field 
			  type='email' 
			  id='correo' 
			  name='correo' 
			  placeholder='correo@correo.com' 
			  value={values.correo}
			  onChange={handleChange}
			  onBlur={handleBlur}
		  />	   
	  {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}		
	  </div>
				<div className='contentPais' >
					<Field name='pais' as='select'> Pais :
						<option value='Colombia'>Colombia</option>
						<option value='Mexico'>Mexico</option>
					</Field>
				</div>

				<div className='contentSex'>
					<label>
						<Field type='radio' name='sexo' value='hombre'/>Hombre
					</label>
					<label>
						<Field type='radio' name='sexo' value='mujer'/>Mujer
					</label>
				</div>

				<div>
					<Field name='mensaje' as='textarea' placeholder='Mensaje'/>
				</div>
				<button type='submit'>Enviar</button>
				{ formEnviado && <h1 className='exito'>¡Formulario enviado con exito!</h1>}
			</Form>	
			)}
		</Formik>
		</div>

	 </div>	
	)
}
 
export default Formulario;





