import React, { useState } from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';
import noisette from '../../assets/images/noisette.png';

const ingredientsList = [
  'Farine', 'Sucre', 'Beurre', 'Chocolat', 'Noix', 'Avoine', 'Cannelle'
];


const BiscuitForm = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    setSelectedIngredients(prevSelected =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter(item => item !== ingredient)
        : [...prevSelected, ingredient]
    );
  };

  return (
    <Container className='text-center'>
    
          <Dropdown show={dropdownOpen} onToggle={() => setDropdownOpen(!dropdownOpen)}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className='border libre px-3 border-2'>
             <img src={noisette} alt="noisette" className="me-5" style={{width: "18px"}} />Ingrédients
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div style={{ maxHeight: '200px', overflowY: 'scroll', padding: '10px' }}>
                {ingredientsList.map((ingredient, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={`ingredient-${index}`}
                    label={ingredient}
                    value={ingredient}
                    onChange={handleIngredientChange}
                    checked={selectedIngredients.includes(ingredient)}
                  />
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
    
    </Container>
  );
};

export default BiscuitForm;
