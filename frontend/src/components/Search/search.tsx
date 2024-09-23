import React, { SyntheticEvent } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import FormControl from 'react-bootstrap/esm/FormControl'

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    handleSearch: (e: any) => void
    search: string | undefined
}

const Search : React.FC<Props> = ({search, handleSearch, onClick}: Props):JSX.Element => {
    
   
    return (
        <Form className="d-flex" onSubmit={handleSearch}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search ?? ''}
          onChange={(e) => handleSearch(e)}
        />
        <Button type="submit" variant="outline-success" onClick={onClick} style={{color: 'orange', borderColor: 'orange'}}>
          Search
        </Button>
      </Form>
  )
}

export default Search 