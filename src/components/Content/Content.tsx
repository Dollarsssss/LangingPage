import './Content.css'
import ProductImage from '../../assets/product.jpg'
import ProductImage2 from '../../assets/product2.jpg'
import ProductImage3 from '../../assets/product3.jpg'
import GoogleImage from '../../assets/google.png'
import { useEffect } from 'react';

function Content() {

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const layers = [
                { id: 'parallaxLayer' },
                { id: 'parallaxLayerZindex-1'},
                { id: 'parallaxLayerZindex-2'},
                { id: 'parallaxLayerZindex-3'}
                 
            ];
    
            layers.forEach(layerInfo => {
                const layer = document.getElementById(layerInfo.id);
                if (!layer) return;
    
                const depthAttr = layer.getAttribute('data-depth');
                const depth = depthAttr ? parseFloat(depthAttr) : 0;
    
                const x = (window.innerWidth - e.pageX * depth) / 100;
                const y = (window.innerHeight - e.pageY * depth) / 100;
                layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <section className='content'>
        <div className="container">
            <div className='parallax-layer' data-depth="1" id="parallaxLayer">
                <img src={ProductImage} alt=''/>
            </div>
            <div className='parallax-layer-zindex-1' data-depth="2.5" id="parallaxLayerZindex-1">
                <img src={GoogleImage} alt=''/>
            </div>
            <div className='parallax-layer-zindex-2' data-depth="3.5" id="parallaxLayerZindex-2">
                <img src={ProductImage2} alt=''/>
            </div>
            <div className='parallax-layer-zindex-3' data-depth="2" id="parallaxLayerZindex-3">
                <img src={ProductImage3} alt=''/>
            </div>
        </div>
    </section>
  )
}

export default Content