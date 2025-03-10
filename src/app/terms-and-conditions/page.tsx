import React from 'react'

const Page = () => {
    return (
        <div className="max-w-[1200px] mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Termos e Condições - TEAM LINO</h1>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Preâmbulo</h2>
                <p>Estas condições gerais de venda são acordadas entre Ricardo Filipe Neves Lino, com sede Largo José
                    Júlio nº10, número de identificação fiscal 187150273 e contacto +351 962 379 341, doravante
                    designada por “TEAM LINO“ e as pessoas que desejem efetuar compras através do website
                    www.teamlino.pt doravante designadas por “Utilizador”. As partes acordam que as compras efetuadas
                    através do website www.teamlino.pt serão reguladas exclusivamente pelo presente contrato com
                    exclusão de quaisquer condições previamente disponíveis no website.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Artigo 1 – Objeto</h2>
                <p>As presentes condições gerais de venda têm por objeto disponibilizar e definir todas as informações
                    necessárias ao Utilizador sobre as modalidades de encomenda, de venda, pagamento e prestação do
                    serviço, efetuado no website www.teamlino.pt. Estas condições regulam todas as etapas necessárias
                    para realizar a aquisição e garantem o seguimento desta prestação de serviço ao Utilizador.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Artigo 2 – Encomenda</h2>
                <p>O Utilizador concretiza a sua encomenda através da conclusão do processo de compra apresentado no
                    website www.teamlino.pt, adicionando o(s) produto(s) ou serviço(s) que pretende encomendar ao cesto
                    de compras:</p>
                <ul className="list-disc pl-6">
                    <li>Registar-se no website teamlino.pt, fornecendo para o efeito as informações solicitadas.</li>
                    <li>Efetuar o login com e-mail e palavra-passe.</li>
                    <li>Completar as informações e escolher opções (morada de entrega e faturação, forma de envio e
                        pagamento, NIF e nome para efeitos fiscais).
                    </li>
                </ul>
                <p>A confirmação final da encomenda equivale à aceitação plena e completa dos preços e descrição dos
                    produtos/serviços disponíveis para venda assim como destas Condições Gerais de Venda. A TEAM LINO
                    honrará as encomendas recebidas online. Na falta de disponibilidade da prestação do serviço, a TEAM
                    LINO compromete-se a informar o Utilizador logo que possível.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Artigo 3 – Pagamento</h2>
                <p>No website www.teamlino.pt, a TEAM LINO propõe ao Utilizador as seguintes modalidades de pagamento
                    via Viva Payment Services, S.A.:</p>
                <ul className="list-disc pl-6">
                    <li>Cartão de crédito (Visa, Mastercard);</li>
                    <li>Referência Multibanco;</li>
                    <li>MBWay;</li>
                    <li>Transferência Bancária.</li>
                </ul>
                <p>No caso do pagamento com cartão de crédito, o débito será efetuado no cartão do Utilizador
                    imediatamente após confirmação da capacidade de prestação do serviço.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Artigo 4 – Disponibilização e Consumo</h2>
                <p>A disponibilização do serviço será realizada após a confirmação do pagamento efetuado.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Artigo 5 – Preços</h2>
                <p>Os preços devem entender-se em Euros, com taxas e impostos incluídos, tendo em conta o IVA em vigor à
                    data do pagamento da encomenda. Caso se verifique um aumento do preço de algum serviço, o Utilizador
                    será informado de imediato, podendo optar por continuar a encomenda ou cancelá-la.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Artigo 6 – Cancelamento e Devolução</h2>
                <p>O processo de cancelamento ou devolução é tratado caso a caso, pelo Ricardo Filipe Neves Lino. O
                    pedido deverá chegar por escrito para o e-mail info@teamlino.pt, até 2 dias após a encomenda. O
                    reembolso será feito no prazo máximo de 30 dias.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Política de Privacidade</h2>
                <p>A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para a
                    TEAM LINO. O tratamento dos dados é feito no cumprimento da legislação sobre proteção de dados
                    pessoais.</p>
            </section>

            <section className="mb-10 border-b pb-6">
                <h2 className="text-xl font-semibold mb-4">Cookies e Publicidade</h2>
                <p>Utilizamos cookies para armazenar informações e melhorar a experiência do usuário. Publicidade de
                    terceiros pode utilizar cookies e web beacons para personalizar anúncios.</p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">Ligações a Sites Terceiros</h2>
                <p>A TEAM LINO pode conter links para sites terceiros, não nos responsabilizamos por suas políticas de
                    privacidade ou conteúdos.</p>
            </section>
        </div>
    )
}
export default Page
