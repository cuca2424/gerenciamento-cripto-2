import Carteiras from "../../componentes/Dashboard/Carteiras"
import MaioresPerdas from "../../componentes/Testes/novaDashboard/MaioresPerdas"
import MaioresGanhos from "../../componentes/Testes/novaDashboard/MaioresGanhos"
import Informativo1 from "../../componentes/Dashboard/Informativo1"
import MedoGanancia from "../../componentes/Testes/novaDashboard/MedoGanancia"
import AporteSaldo from "../../componentes/Testes/novaDashboard/AporteSaldo"

function ImpostoDeRenda() {
    return(
      <div class="col-12">
        <div class="row altura">
          <div className="col-12 col-lg-6 col-xxl-4 h-50 p-2">
            <Informativo1 
                  aportes="0"
                  saldo="0"
                  lucro="0" 
                  lucroPorcentil="0"
                  />
            </div>
          <div className="col-12 col-lg-6 col-xxl-4 h-50 p-2 border-end border-start">
            <MedoGanancia />
          </div>
          <div className="col-12 col-lg-6 col-xxl-4 h-50 p-2">
            <AporteSaldo />
          </div>
          <div className="col-12 col-lg-6 col-xxl-4 h-50 p-2">
            <MaioresGanhos />
          </div>
          <div className="col-12 col-lg-6 col-xxl-4 h-50 p-2">
            <MaioresPerdas />
          </div>
          <div className="col-12 col-lg-6 col-xxl-4 h-50 p-2">
            <Carteiras />
          </div>
        </div>
      </div>
    )
}

export default ImpostoDeRenda