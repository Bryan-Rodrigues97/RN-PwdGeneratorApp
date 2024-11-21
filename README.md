# React Native - Gerador de Senhas Aleatórias e Locker

Este é um aplicativo desenvolvido com **React Native** e **Expo**, que serve como um **gerador de senhas aleatórias** e um **locker** (armazenamento seguro) para senhas. O app permite criar senhas fortes e armazená-las de forma segura no dispositivo.

## Funcionalidades

- **Gerador de Senhas Aleatórias**: Gera senhas seguras com configurações personalizáveis, como número de caracteres, caracteres especiais, letras maiúsculas/minúsculas e números.
- **Armazenamento**: Permite armazenar senhas geradas ou inseridas manualmente de forma segura usando armazenamento local.
- **Interface Intuitiva**: A interface do aplicativo é simples, amigável e fácil de usar, garantindo uma boa experiência para o usuário.
- **Acesso Rápido**: Armazene suas senhas e acesse-as rapidamente sempre que necessário.

## Tecnologias Usadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta que facilita o desenvolvimento, compilação e publicação de apps React Native.
- **Expo Router**: Usado para navegação no aplicativo, implementando uma estrutura de navegação **Tab**.
- **AsyncStorage**: Utilizado para armazenamento local e seguro das senhas.

## Estrutura do Projeto

O projeto utiliza **Expo Router** para a navegação entre telas. O **Expo Router** permite uma navegação baseada em arquivos, simplificando a organização do código e tornando o desenvolvimento mais ágil.

A navegação do tipo **Tab** foi configurada para dividir as funcionalidades principais do app, como a geração de senhas e o armazenamento seguro. Cada aba do aplicativo oferece uma funcionalidade distinta, e a navegação entre elas é facilitada pelo Expo Router.

## Como Rodar

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/Bryan-Rodrigues97/RN-PwdGeneratorApp.git
    cd RN-PwdGeneratorApp
    ```

2. **Instale as dependências**:

    Para instalar as dependências do projeto, use o seguinte comando:

    ```bash
    npm install
    ```

3. **Execute o aplicativo** com Expo:

    Para rodar o aplicativo no **Android** ou **iOS**, utilize o Expo CLI:

    ```bash
    npx expo start
    ```

    Após rodar o comando acima, você pode escanear o QR code gerado no terminal com o aplicativo **Expo Go** no seu celular para ver o app em funcionamento.

## Demonstração

### Tela Inicial IOS

<img src="https://github.com/Bryan-Rodrigues97/RN-PwdGeneratorApp/blob/main/Screenshots/home.png?raw=true" alt="Tela Inicial" width="300"/>

### Modal de Home para iOS

<img src="https://github.com/Bryan-Rodrigues97/RN-PwdGeneratorApp/blob/main/Screenshots/IOS%20-%20Home%20Modal.png?raw=true" alt="Modal de Home para iOS" width="300"/>

### Lista de Senhas IOS

<img src="https://github.com/Bryan-Rodrigues97/RN-PwdGeneratorApp/blob/main/Screenshots/pwd-list.png?raw=true" alt="Gerador de Senhas" width="300"/>




