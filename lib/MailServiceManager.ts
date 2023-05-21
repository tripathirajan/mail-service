import nodemailer from 'nodemailer';
import { SendGridConfig } from './types';
import { default as sendGridTransport } from './support';
import MailAgent from './MailAgent';

/**
 * Mail service manager
 */
class MailServiceManager {
  /**
   * Instance  of mail service manager
   */
  private static instance: MailAgent;

  /**
   * Transport  of mail service manager
   */
  private static transport: any;

  /**
   * Gets transport
   * @returns
   */
  private static getTransport() {
    if (this.transport) {
      if (!process.env.SEND_GRID_API_KEY) {
        throw new Error(`Please add send grid api key in env file for:
            SEND_GRID_API_KEY =  `);
      }
      const options: SendGridConfig = {
        auth: { api_key: process.env.SEND_GRID_API_KEY },
      };
      this.transport = nodemailer.createTransport(sendGridTransport({ ...options }));
    }
    return this.transport;
  }

  /**
   * Gets instance
   * @returns
   */
  public static getInstance() {
    if (!this.instance || this.instance === undefined) {
      this.instance = new MailAgent(this.getTransport());
    }
    return this.instance;
  }
}

export default MailServiceManager;
