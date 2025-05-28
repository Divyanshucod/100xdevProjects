export function Button(props){
     return <button style={{
    padding: '20px',
    fontSize: '20px',
    background: 'rgba(0, 0, 0, 0.6)',       // Semi-transparent black
    color: 'white',
    textShadow: '0 0 8px white, 0 0 12px white',
    backdropFilter: 'blur(8px)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer'
  }}
 onClick={props.handleCall}>
        {props.children}
     </button>
}