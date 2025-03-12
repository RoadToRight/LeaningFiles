import React from 'react'

const Loader = ({loading}) => {
  return (
    <div style={{fontSize:"45px",height:"200vh" , display:"flex" , alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <h1>Hello</h1>
        {loading ? "Loading..." : <>  <img src="https://img.freepik.com/free-photo/nutshell-boats-magnifying-glass-maps_23-2147793475.jpg?t=st=1740674421~exp=1740678021~hmac=baf2c64e5f2566ee3f6257751f38c07879343fc7663c6b0adb75c4b45c0e82ef&w=740" alt="" />
          <img src="https://img.freepik.com/premium-photo/antique-map-region_1376535-98429.jpg?w=740" alt="" /></>}
      
          
    </div>
  )
}

export default Loader