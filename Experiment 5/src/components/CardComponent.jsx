import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/appSlice';

const CardComponent = ({ project }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.app.favorites);
  
  const isFavorite = favorites.some(fav => fav.id === project.id);

  const handleToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(project));
    } else {
      dispatch(addFavorite(project));
    }
  };

  return (
    <div className="card">
      <h3 style={{ marginBottom: '0.5rem' }}>{project.name}</h3>
      <p style={{ flexGrow: 1, marginBottom: '1.5rem', opacity: 0.8 }}>{project.description}</p>
      <button 
        onClick={handleToggle} 
        className={isFavorite ? 'outline' : ''}
        style={{ width: '100%' }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default CardComponent;
