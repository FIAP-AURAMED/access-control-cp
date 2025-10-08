import { useNavigate } from "react-router-dom";
 
 
export default function Error() {
 
    const navigate = useNavigate();
 
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
            <p>Erro 404: Página não encontrada</p>
            <button onClick={() => navigate('/')} className="px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Voltar para o Login</button>
        </div>
    )
}