const ToggleDisplay = ({ children, show }) => {
  const displayStyle = {
    display: show ? undefined : 'none',
  }

  return <span style={displayStyle}>{children}</span>
}

export default ToggleDisplay
