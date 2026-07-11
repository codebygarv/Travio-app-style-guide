import ColorBox from '../../components/ColorBox';
import ScaleRow from '../../components/ScaleRow';
import './styles.css';

const StyleGuidePhone = ({ theme, title }) => (
  <div className="device" data-theme={theme}>
    <header className="header">
      <span className="icon-placeholder">←</span>
      <h2>{title}</h2>
      <span className="icon-placeholder">•••</span>
    </header>

    <div className="content">
      <section className="section" style={{ paddingTop: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)' }}>
          Travio Tokens
        </h1>
        <p className="section-desc">
          Every token, font, and component used across the prototype. Built on a soothing sage green palette.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Primary · Sage scale</h2>
        <div className="color-grid">
          <ColorBox name="primary-50" hex="#F8FAFA" bgClass="primary-50" />
          <ColorBox name="primary-100" hex="#F0F5F4" bgClass="primary-100" />
          <ColorBox name="primary-200" hex="#DCE8E6" bgClass="primary-200" />
          
          <ColorBox name="primary-300" hex="#B6D3CD" bgClass="primary-300" />
          <ColorBox name="primary-400" hex="#93B8B1" bgClass="primary-400" />
          <ColorBox name="primary-500" hex="#709D94" bgClass="primary-500" />
          
          <ColorBox name="primary-600" hex="#5C8A80" bgClass="primary-600" />
          <ColorBox name="primary-700" hex="#4D7068" bgClass="primary-700" />
          <ColorBox name="primary-800" hex="#34495E" bgClass="primary-800" />
          
          <ColorBox name="primary-900" hex="#2C3E50" bgClass="primary-900" />
          <ColorBox name="primary-950" hex="#1A242F" bgClass="primary-950" />
          <ColorBox name="white" hex="#FFFFFF" bgClass="white" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Brand accents</h2>
        <div className="color-grid">
          <ColorBox name="brand-action" hex="#709D94" bgClass="brand-action" />
          <ColorBox name="brand-secondary" hex="#DCE8E6" bgClass="brand-secondary" />
          <ColorBox name="brand-dark" hex="#2C3E50" bgClass="brand-dark" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Typography</h2>
        <div className="type-item">
          <h1 className="type-sample" style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700 }}>Headline · font-heading</h1>
          <span className="type-desc">hero titles, section headings</span>
        </div>
        <div className="type-item">
          <h1 className="type-sample" style={{ fontFamily: 'var(--font-editorial)', fontSize: '20px', fontStyle: 'italic' }}>Editorial · font-editorial</h1>
          <span className="type-desc">italic accent words only</span>
        </div>
        <div className="type-item" style={{ marginBottom: 0 }}>
          <p className="type-sample" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.5 }}>
            Body text · font-body. This is the workhorse for paragraphs, form fields, and list rows.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Buttons</h2>
        <button className="btn-primary">Primary action</button>
        <span className="scale-usage" style={{ display: 'block', marginBottom: '16px' }}>bg-brand-action · rounded-full</span>
        
        <button className="btn-secondary">Secondary action</button>
        <span className="scale-usage" style={{ display: 'block' }}>bg-main · border-input</span>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <h2 className="section-title">Input states</h2>
        <div className="input-wrapper">
          <div className="input-demo">Default</div>
        </div>
        <div className="input-wrapper">
          <div className="input-demo focused">Focused</div>
        </div>
      </section>
    </div>
  </div>
);

export default StyleGuidePhone;
