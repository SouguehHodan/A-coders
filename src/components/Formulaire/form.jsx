// pages/formulaire.js
'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Formulaire() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ici gérer la soumission du formulaire
    console.log('Formulaire soumis avec succès !');
  };

  return (
    <div className="container">
      <Head>
        <title>Formulaire de Contact</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Head>
      <h1 className="mt-5 mb-4">Formulaire de Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea id="message" className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}


// const Form =({ isVisible }) => {

//     return (
        // <div className="acc-conc1">
        //         <form  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="formcom">
        
        //         <div className="row mb-4">
        //             <div className="col">
        //             <div data-mdb-input-init class="form-outline  border-primary-subtle">
        //                 <input type="text" id="form6Example1" className="form-control" placeholder="Nom" />
        //             </div>
        //             </div>
        //             <div className="col">
        //             <div data-mdb-input-init class="form-outline  border-primary-subtle">
        //                 <input type="text" id="form6Example2" class="form-control" placeholder="Prenom" />
        //             </div>
        //             </div>
        //         </div>

        //         <div className="row mb-4">
        //             <div className="col">
        //             <div data-mdb-input-init class="form-outline  border-primary-subtle">
        //                 <input type="text" id="form6Example1" className="form-control"  placeholder="Telephone"/>
        //             </div>
        //             </div>
        //             <div className="col">
        //             <div data-mdb-input-init class="form-outline  border-primary-subtle">
        //                 <input type="text" id="form6Example2" class="form-control" placeholder="Adresse email" />
        //             </div>
        //             </div>
        //         </div>
        //         <div data-mdb-input-init class="form-outline mb-4  border-primary-subtle">
        //             <textarea className="form-control" id="form6Example7" rows="4" placeholder="Votre message"></textarea>
        //         </div>
        //         <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4 rounded">Envoyer</button>
        //         </form>
        //     </div>  
//   );
// }