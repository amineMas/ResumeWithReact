import React, { Component } from 'react'

export default class Degree extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Diplômes &amp; formations</h2>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                        <h3 className="mb-0">Développeur web PHP full-stack</h3>
                        <div className="subheading mb-3">Doranco école supérieur des technologies créative</div>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary">Avril 2019 - Décembre 2019</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                        <h3 className="mb-0">BTS Comptabilité gestion</h3>
                        <div className="subheading mb-3">Lycée Jean Lurçat</div>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary"> 2010 - 2012</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                        <h3 className="mb-0">BAC STG mention Bien</h3>
                        <div className="subheading mb-3">Lycée François Truffaut</div>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary"> 2010 </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}