import { forwardRef } from 'react';
import './style.scss';

const Partner = forwardRef(({children}, ref) => {
  return (
    <div ref={ref} className="partner-card">
			{children}
    </div>
  );
});

export default Partner;