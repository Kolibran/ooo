
export  const dataOperation = (setRawData: (data: any) => void)=> {

fetch('https://testbackend.nc-one.com/image')
      .then((response) => response.json())
      .then((data) =>
         setRawData(data)
        )
      .catch((error) => console.error('An error occurred:', error))
}
