import { ReactNode } from 'react'
import './Accordion.css'


    interface AccordionProp {
        id:number
        title:ReactNode
        content:ReactNode
        isOpen: boolean; 
        onToggle: (id: number) => void;
    }
   
    function Accordion({id,title, content, isOpen, onToggle}:AccordionProp) {

        const toggleAccordion = () => {
            onToggle(id);
        };

        return (
            <section className='accordion'>
                <div className="accordion-item">
                    <h3 className='accordion-header'>
                        <button id={`accordion${id}`}  className={`accordion-btn ${isOpen ? 'open' : ''}`}  onClick={toggleAccordion}  aria-expanded={isOpen}>
                            <h1 className='accordion-title'>{title}</h1>
                        </button>
                    </h3>
                    <div className={`accordion-wrapper ${isOpen ? 'open':''}`}>
                        <div className="accordion-body">
                           <h4>{content}</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    export default Accordion