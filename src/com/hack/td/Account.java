package com.hack.td;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Account {
	private String accountID;
	public String getAccountID() {
		return accountID;
	}

	public void setAccountID(String accountID) {
		this.accountID = accountID;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	private String bankName;

	
	public Account(String id, String name) {
		super();
		this.accountID = id;
		this.bankName = name;
	}

	public Account() {
		super();
	}
}