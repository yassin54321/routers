import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
const NewMovie = ({handleAdd}) => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [rating, setRating] = useState(1)
  const [date, setDate] = useState("")
  const handleRating=(x)=>setRating(x)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newItem={
      id:Math.random(),name,image,date,rating
    }
    handleAdd(newItem)
    setDate("")
    setImage("")
    setName("")
    setRating(1)
    closeModal()
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
    <button id='btn-add' onClick={openModal}>Add New Movie</button>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form id="add-movie" onSubmit={handleSubmit}>
        <div>
        <label style={{width:"80px", height:"40px"}}>Movie Title</label>
        <input type="text" style={{width:"300px", height:"40px",backgroundColor:'#7067B2'}} value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
        <label style={{width:"80px", height:"40px"}}>Movie Poster</label>
        <input type="text" style={{width:"300px", height:"40px" ,backgroundColor:'#7067B2'}} value={image} onChange={e=>setImage(e.target.value)}/>
        </div>
        <StarRating rating={rating} handleRating={handleRating}/>
        <label style={{width:"80px", height:"40px"}}>Movie Date</label>
        <input type="date" style={{width:"300px", height:"40px",backgroundColor:'#7067B2'}} value={date} onChange={e=>setDate(e.target.value)}/>
        <button id='btn-adde'  type='Submit'>Add</button>
        <button id='btn-cance' onClick={closeModal}>Cancel</button>
      </form>
    </Modal>
    </div>
  )
}

export default NewMovie