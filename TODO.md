TODO: '-' -> Todo, '**' -> Done

- Create Sign up Screen
- Connect Login button to login and signup server
- Generate chat room buttons on homescreen
- Create Profile screen for users


 <Footer style={styles.footer}>
                    <FooterTab>
                        <Button style={styles.ftBtn}>
                            <Icon name="home" />
                        </Button>
                        <Button active style={styles.ftBtn} onPress={this.handleAdd}>
                            <Icon active name="add" />
                        </Button>
                        <Button style={styles.ftBtn}>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>