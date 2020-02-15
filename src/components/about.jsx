import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Mastouri
            <span className="text-primary"> Amine</span>
          </h1>
          <p className="lead mb-5">Passioné par le développement web, je suis à la recherche d'un poste de développeur PHP Symfony full-stack ou back-end. Je code régulièrement mais cela ne suffit pas à étancher ma soif de curiosité et mon envie de progresser car je veux participer à des vrais projets empreints d'utilité. Pour cela je veux rejoindre une équipe car le partage et la cohésion de groupe permettent de réaliser de grandes choses.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/aminemastouri/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/amineMas">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    )
    }
}