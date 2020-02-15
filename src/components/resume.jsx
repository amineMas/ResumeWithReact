import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Expériences</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur Front-end</h3>
              <div className="subheading mb-3">Freelance- Développement site vitrine pour Physical Team FIT</div>
              <ul>
                <li>Etude des besoins du client</li>
                <li>Réalisation des maquettes avec Balsamiq mockup</li>
                <li>Intégration responsive des maquettes en HTML/CSS et Bootstrap</li>
                <li>Animations en JavaScript</li>
              </ul> 
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Décembre 2019 - Janvier 2019</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur PHP Symfony full-stack</h3>
              <div className="subheading mb-3">Agence Celaneo pour client Honda</div>
              <p>
                Intégration de plusieurs maquettes Photoshop en version mobile et version desktop. Développement d’un quizz sur l’hybride avec envoi en base de données des informations saisies.
              </p>
              <ul>
                <li>Développement d'un quizz avec une version Desktop et mobile en
                Symfony 4 avec envoi en base de données mySQL</li>
                <li>Utilisation de Twig, HTML/CSS et Bootstrap pour le front-end</li>
                <li>Intégration de plusieurs maquettes sous format PSD</li>
                <li>Versionning des projets sur GitHub</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2019 - Novembre 2019</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Développeur PHP Symfony</h3>
              <div className="subheading mb-3">Agence Celaneo pour client SNCF</div>
              <p>Outil interne sous forme de graphique pour étudier le nombre d'avis traités par les modérateurs</p>
              <ul>
                <li>Utilisation de la librairie Javascript AmCharts avec intégration des données sous format jSON</li>
                <li>Création et récupération des variables côté back en Symfony</li>
                <li>Gestion des droits daccès en Symfony</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Août 2019 - Septembre 2019</span>
            </div>
          </div>
        </div>
      </section>
        )
    }
}