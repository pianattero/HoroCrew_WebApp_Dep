import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function App() {
    const { setVisible, bindings } = useModal();
    return (
        <div>
            <Button auto shadow color="secondary" onPress={() => setVisible(true)}>
                Get your horoscope Today!
            </Button>
            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Here is Your Horoscope!
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    HERE THE API CONTENT
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}