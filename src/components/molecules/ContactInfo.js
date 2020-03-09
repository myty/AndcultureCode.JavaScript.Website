import React from 'react';

const ContactInfo = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className = "m-contact-info">
            <div className = "o-rhythm__container">
                <div className = "o-rhythm__row">
                    <div className = "m-contact-info__address">
                        <h6 className = "-secondary">Location</h6>
                        <div>
                            <a href = { this.props.mapLink } className = "-inline" target = "_blank">
                                { this.props.streetAddress }
                            </a>
                        </div>
                        <div>
                            <a href={`tel:${this.props.phoneNumber}`} className = "-inline">{ this.props.phoneNumber }</a>
                        </div>
                    </div>
                    <div className = "m-contact-info__social">
                        <h6 className = "-secondary">Social</h6>
                        <a href="">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><title>social icons</title><path d="M9,.68a8.5,8.5,0,1,0,8.5,8.5A8.5,8.5,0,0,0,9,.68Zm5.61,3.91a7.24,7.24,0,0,1,1.65,4.52,17.21,17.21,0,0,0-5.06-.23l-.15-.38c-.15-.35-.32-.71-.48-1A9.58,9.58,0,0,0,14.61,4.59ZM9,1.93a7.26,7.26,0,0,1,4.81,1.82A8.16,8.16,0,0,1,10,6.37,37.48,37.48,0,0,0,7.29,2.12,7.41,7.41,0,0,1,9,1.93Zm-3.09.68A43.37,43.37,0,0,1,8.6,6.81a27.28,27.28,0,0,1-6.71.88A7.29,7.29,0,0,1,5.91,2.61ZM1.74,9.18V9a26.32,26.32,0,0,0,7.45-1c.22.41.41.82.59,1.24l-.28.08A11.52,11.52,0,0,0,3.6,14,7.24,7.24,0,0,1,1.74,9.18ZM9,16.44a7.18,7.18,0,0,1-4.45-1.53,10,10,0,0,1,5.69-4.54h0a30.07,30.07,0,0,1,1.55,5.5A7.14,7.14,0,0,1,9,16.44Zm4.05-1.24A31.68,31.68,0,0,0,11.64,10a10.38,10.38,0,0,1,4.51.32A7.19,7.19,0,0,1,13.05,15.2Z"/></svg>
                        </a>
                        <a href="">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><title>social icons</title><path d="M17.7,3.39A7.44,7.44,0,0,1,15.61,4,3.6,3.6,0,0,0,17.2,2a7.27,7.27,0,0,1-2.3.88A3.62,3.62,0,0,0,8.63,5.32a3.68,3.68,0,0,0,.08.82A10.26,10.26,0,0,1,1.23,2.35,3.65,3.65,0,0,0,2.35,7.2,3.5,3.5,0,0,1,.71,6.75v0a3.66,3.66,0,0,0,2.9,3.57,3.58,3.58,0,0,1-.95.12A3.08,3.08,0,0,1,2,10.41a3.65,3.65,0,0,0,3.39,2.53,7.27,7.27,0,0,1-4.5,1.55A6.26,6.26,0,0,1,0,14.44a10.19,10.19,0,0,0,5.57,1.63A10.25,10.25,0,0,0,15.89,5.74c0-.16,0-.31,0-.47A7.39,7.39,0,0,0,17.7,3.39Z"/></svg>
                        </a>
                        <a href="">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><title>social icons</title><path d="M12.25.32H5.75A5.43,5.43,0,0,0,.32,5.75v6.5a5.43,5.43,0,0,0,5.43,5.43h6.5a5.43,5.43,0,0,0,5.43-5.43V5.75A5.43,5.43,0,0,0,12.25.32Zm3.8,11.93a3.8,3.8,0,0,1-3.8,3.8H5.75A3.8,3.8,0,0,1,2,12.25V5.75A3.8,3.8,0,0,1,5.75,2h6.5a3.8,3.8,0,0,1,3.8,3.8Z"/><path className="cls-1" d="M9,4.66A4.34,4.34,0,1,0,13.34,9,4.34,4.34,0,0,0,9,4.66Zm0,7.05A2.71,2.71,0,1,1,11.71,9,2.72,2.72,0,0,1,9,11.71Z"/><circle className="cls-1" cx="13.66" cy="4.34" r="0.58"/></svg>
                        </a>
                        <a href="">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><title>social icons</title><path d="M9.05.59A8.51,8.51,0,0,0,7.72,17.51v-6H5.56V9.1H7.72V7.23a3,3,0,0,1,3.22-3.31,13.48,13.48,0,0,1,1.9.16v2.1H11.77a1.23,1.23,0,0,0-1.39,1.33V9.1h2.36l-.38,2.46h-2v6A8.51,8.51,0,0,0,9.05.59Z"/></svg>
                        </a>
                        <a href="">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><title>social icons</title><path d="M17.67,10.71v6.38H14v-6c0-1.49-.54-2.51-1.88-2.51A2,2,0,0,0,10.19,10a2.73,2.73,0,0,0-.12.9v6.22H6.37S6.42,7,6.37,6h3.7V7.54s0,0,0,0h0v0A3.67,3.67,0,0,1,13.41,5.7c2.43,0,4.26,1.59,4.26,5ZM2.5.59A1.93,1.93,0,0,0,.41,2.52a1.91,1.91,0,0,0,2,1.92h0A1.93,1.93,0,1,0,2.5.59ZM.63,17.09H4.32V6H.63Z"/></svg>
                        </a>
                        <a href="">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><title>social icons</title><path d="M9,.59A8.51,8.51,0,0,0,6.31,17.18c.43.08.58-.19.58-.41s0-.74,0-1.45C4.51,15.83,4,14.18,4,14.18a2.27,2.27,0,0,0-.94-1.25c-.77-.52.06-.51.06-.51a1.79,1.79,0,0,1,1.3.87A1.82,1.82,0,0,0,6.91,14a1.77,1.77,0,0,1,.54-1.14c-1.89-.21-3.88-.94-3.88-4.2a3.25,3.25,0,0,1,.88-2.28,3.08,3.08,0,0,1,.08-2.26s.71-.23,2.34.88a8,8,0,0,1,4.26,0c1.63-1.11,2.34-.88,2.34-.88a3.08,3.08,0,0,1,.08,2.26,3.25,3.25,0,0,1,.88,2.28c0,3.27-2,4-3.89,4.2a2,2,0,0,1,.58,1.57c0,1.14,0,2.06,0,2.34s.15.49.58.41A8.51,8.51,0,0,0,9,.59Z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className = "m-contact-info__map">
                <iframe src="https://snazzymaps.com/embed/222814" width="87%" height="537px" frameBorder="0"></iframe>
            </div>
            <div className = "o-rhythm__container">
                <div className = "m-contact-info__directions">
                    <h6 className = "-secondary">Directions</h6>
                    <p>{ this.props.directions }</p>
                </div>
            </div>
        </div>
    )
  }
}

export default ContactInfo;
