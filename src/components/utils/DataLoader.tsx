
export const DataLoader = () => {
    return (
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
  }
  
  export const CenteredDataLoader = () => {
    return (
      <div class="flex-it pt-8 justify-center items-center">
        <DataLoader />
      </div>
    )
  }