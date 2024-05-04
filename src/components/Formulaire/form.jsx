// pages/formulaire.js
'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Formulaire() {
  const [nom, setNom] = useState('');
  const [Entreprise, setNomEntreprise] = useState('');
  const [telephone, setTelephone] = useState('');
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
      <h1 className="mt-5 mb-4">Nous contact directement</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="prenom" className="form-control p-3" placeholder='Nom et Prenon' value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div className="form-group mt-4">
          <input type="text" id="nom" className="form-control p-3" placeholder="Nom de l'entreprise" value={Entreprise} onChange={(e) => setNomEntreprise(e.target.value)} />
        </div>
        <div className="form-group mt-4">
          <input type="text" id="telephone" className="form-control p-3" placeholder="Numero telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </div>
        <div className="form-group mt-4">
          <input type="email" id="email" className="form-control p-3" placeholder='Eamil' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group mt-4">
          <textarea id="message" className="form-control" placeholder='Décrivez votre message ici' rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="w-100 mt-4">
          <button type="submit" className="btn btn-red p-3 w-100">Envoyer</button>
        </div>
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