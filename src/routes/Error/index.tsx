import { useNavigate } from "react-router-dom";
 
 
export default function Error() {
 
    const navigate = useNavigate();
 
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
            <p>Erro 404: Página não encontrada</p>
            
        </div>
    )
}