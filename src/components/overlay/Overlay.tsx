const Overlay = () => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
        top: 0,
        left: 0,
        color: '#101010',
        height: '100%',
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ fontWeight: 200 }}>Ho Tri Luc.</p>
      <p style={{ fontWeight: 200, alignSelf: 'flex-end' }}>dd/mm/2023</p>
    </div>
  );
};

export default Overlay;
