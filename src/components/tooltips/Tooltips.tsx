import React, { useEffect, useState } from "react";
import './tooltips.css';

interface TooltipsProps {
  text: string;
  findRef: React.RefObject<HTMLElement | null>;
  variant?: 'light' | 'black';
}

function Tooltips(props: TooltipsProps) {
    const { text, findRef, variant } = props
    
    const [coords, setCoords] = useState({left: '0px', top: '0px'});

    const [visibleTip, setVisibleTip] = useState(false);

    useEffect(() => {
      let timerId: ReturnType<typeof setTimeout>;

      window.addEventListener('mousemove', (event) => {
            if (event.target === findRef.current){
                setCoords({
                    left: (event.clientX + 15) + 'px',
                    top:  (event.clientY + 15) + 'px',
                    });
                setVisibleTip(true);
                console.log(coords);                
                timerId = setTimeout(() => { setVisibleTip(false)}, 3000)
            }
        });

      return () => {
        clearTimeout(timerId);
        window.removeEventListener(
          'mousemove',
          (event) => {
            setCoords({
                left: (event.clientX - 5) + 'px',
                top:  (event.clientY - 5) + 'px',
            });
            }
        );
      };
    }, []);



    return <>
        { visibleTip ?
                <div className={variant ? `tooltips-${variant}` : 'tooltips'} style={coords}>
                    {text}
                </div> : '' 
            }
    </> 
        
    
  /*const position = usePosition();
  if (!text || !position) return null;

  const style = {
    top: position.top + window.scrollY + position.height + 5,
    left: position.left + window.scrollX + position.width / 2 - 50,
  };

  return (
    <div className="tooltip" style={style}>
      {text}
    </div>
  );*/

};

export { Tooltips };