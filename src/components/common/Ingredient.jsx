import React, { useEffect, useState } from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';
import noisette from '../../assets/images/noisette.png';

const Ingredient = ({ onIngredientsChange }) => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/ingredients/');
        const data = await response.json();
        setIngredientsList(data);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientChange = (event) => {
    const ingredientId = parseInt(event.target.value);
    const updatedSelectedIngredients = selectedIngredients.includes(ingredientId)
      ? selectedIngredients.filter(item => item !== ingredientId)
      : [...selectedIngredients, ingredientId];

    setSelectedIngredients(updatedSelectedIngredients);
    if (onIngredientsChange && typeof onIngredientsChange === 'function') {
      onIngredientsChange(updatedSelectedIngredients);
    }
  };

  return (
    <Container className='text-center'>
      <Dropdown show={dropdownOpen} onToggle={() => setDropdownOpen(!dropdownOpen)}>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className='border libre px-3 border-2'>
          <img src={noisette} alt="noisette" className="me-5" style={{ width: "18px" }} />Ingrédients
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div style={{ maxHeight: '200px', overflowY: 'scroll', padding: '10px' }}>
            {ingredientsList.map((ingredient) => (
              <Form.Check
                key={ingredient.id}
                type="checkbox"
                id={`ingredient-${ingredient.id}`}
                label={ingredient.name}
                value={ingredient.id}
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes(ingredient.id)}
              />
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Ingredient;
