import React,{ useState } from 'react'
import { StudentInfo } from './studentInfo'
import { StudentInfo2 } from './studentInfo2'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                <div className="container-fluid d-flex flex-column p-0">
                    <a
                        className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                        href="#"
                    >
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">
                            <span>Brand</span>
                        </div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <ul className="navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">
                                <i className="fas fa-tachometer-alt" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/profile.html">
                                <i className="fas fa-user" />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/table.html">
                                <i className="fas fa-table" />
                                <span>Table</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login.html">
                                <i className="far fa-user-circle" />
                                <span>Login</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register.html">
                                <i className="fas fa-user-circle" />
                                <span>Register</span>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center d-none d-md-inline">
                        <button
                            className="btn rounded-circle border-0"
                            id="sidebarToggle"
                            type="button"
                        />
                    </div>
                </div>
            </nav>
            <>
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div className="container-fluid">
          <button
            className="btn btn-link d-md-none rounded-circle me-3"
            id="sidebarToggleTop"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
          <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                className="bg-light form-control border-0 small"
                type="text"
                placeholder="Search for ..."
              />
              <button className="btn btn-primary py-0" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
          <ul className="navbar-nav flex-nowrap ms-auto">
            <li className="nav-item dropdown d-sm-none no-arrow">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                href="#"
              >
                <i className="fas fa-search" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="me-auto navbar-search w-100">
                  <div className="input-group">
                    <input
                      className="bg-light form-control border-0 small"
                      type="text"
                      placeholder="Search for ..."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <span className="badge bg-danger badge-counter">3+</span>
                  <i className="fas fa-bell fa-fw" />
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                  <h6 className="dropdown-header">alerts center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="me-3">
                      <div className="bg-primary icon-circle">
                        <i className="fas fa-file-alt text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="small text-gray-500">
                        December 12, 2019
                      </span>
                      <p>A new monthly report is ready to download!</p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="me-3">
                      <div className="bg-success icon-circle">
                        <i className="fas fa-donate text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="small text-gray-500">
                        December 7, 2019
                      </span>
                      <p>$290.29 has been deposited into your account!</p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="me-3">
                      <div className="bg-warning icon-circle">
                        <i className="fas fa-exclamation-triangle text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="small text-gray-500">
                        December 2, 2019
                      </span>
                      <p>
                        Spending Alert: We've noticed unusually high spending
                        for your account.
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <span className="badge bg-danger badge-counter">7</span>
                  <i className="fas fa-envelope fa-fw" />
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                  <h6 className="dropdown-header">alerts center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image me-3">
                      <img
                        className="rounded-circle"
                        src="/assets/img/avatars/avatar4.jpeg?h=fefb30b61c8459a66bd338b7d790c3d5"
                      />
                      <div className="bg-success status-indicator" />
                    </div>
                    <div className="fw-bold">
                      <div className="text-truncate">
                        <span>
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </span>
                      </div>
                      <p className="small text-gray-500 mb-0">
                        Emily Fowler - 58m
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image me-3">
                      <img
                        className="rounded-circle"
                        src="/assets/img/avatars/avatar2.jpeg?h=5d142be9441885f0935b84cf739d4112"
                      />
                      <div className="status-indicator" />
                    </div>
                    <div className="fw-bold">
                      <div className="text-truncate">
                        <span>
                          I have the photos that you ordered last month!
                        </span>
                      </div>
                      <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image me-3">
                      <img
                        className="rounded-circle"
                        src="/assets/img/avatars/avatar3.jpeg?h=c5166867f10a4e454b5b2ae8d63268b3"
                      />
                      <div className="bg-warning status-indicator" />
                    </div>
                    <div className="fw-bold">
                      <div className="text-truncate">
                        <span>
                          Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!
                        </span>
                      </div>
                      <p className="small text-gray-500 mb-0">
                        Morgan Alvarez - 2d
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image me-3">
                      <img
                        className="rounded-circle"
                        src="/assets/img/avatars/avatar5.jpeg?h=35dc45edbcda6b3fc752dab2b0f082ea"
                      />
                      <div className="bg-success status-indicator" />
                    </div>
                    <div className="fw-bold">
                      <div className="text-truncate">
                        <span>
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
                        </span>
                      </div>
                      <p className="small text-gray-500 mb-0">
                        Chicken the Dog · 2w
                      </p>
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
              </div>
              <div
                className="shadow dropdown-list dropdown-menu dropdown-menu-end"
                aria-labelledby="alertsDropdown"
              />
            </li>
            <div className="d-none d-sm-block topbar-divider" />
            <li className="nav-item dropdown no-arrow">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <span className="d-none d-lg-inline me-2 text-gray-600 small">
                    Valerie Luna
                  </span>
                  <img
                    className="border rounded-circle img-profile"
                    src="/assets/img/avatars/avatar1.jpeg?h=0ecc82101fb9a10ca459432faa8c0656"
                  />
                </a>
                <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />
                    &nbsp;Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />
                    &nbsp;Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />
                    &nbsp;Activity log
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />
                    &nbsp;Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Profile</h3>
        <div className="row mb-3">
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-body text-center shadow">
                <img
                  className="rounded-circle mb-3 mt-4"
                  src="/assets/img/dogs/image2.jpeg?h=a0a7d00bcd8e4f84f4d8ce636a8f94d4"
                  width={160}
                  height={160}
                />
                <div className="mb-3">
                  <button className="btn btn-primary btn-sm" type="button">
                    Change Photo
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="text-primary fw-bold m-0">Projects</h6>
              </div>
              <div className="card-body">
                <h4 className="small fw-bold">
                  Server migration<span className="float-end">20%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-danger"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "20%" }}
                  >
                    <span className="visually-hidden">20%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Sales tracking<span className="float-end">40%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-warning"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "40%" }}
                  >
                    <span className="visually-hidden">40%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Customer Database<span className="float-end">60%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-primary"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "60%" }}
                  >
                    <span className="visually-hidden">60%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Payout Details<span className="float-end">80%</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-info"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span className="visually-hidden">80%</span>
                  </div>
                </div>
                <h4 className="small fw-bold">
                  Account setup<span className="float-end">Complete!</span>
                </h4>
                <div className="progress progress-sm mb-3">
                  <div
                    className="progress-bar bg-success"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                  >
                    <span className="visually-hidden">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row mb-3 d-none">
              <div className="col">
                <div className="card text-white bg-primary shadow">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col">
                        <p className="m-0">Peformance</p>
                        <p className="m-0">
                          <strong>65.2%</strong>
                        </p>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-rocket fa-2x" />
                      </div>
                    </div>
                    <p className="text-white-50 small m-0">
                      <i className="fas fa-arrow-up" />
                      &nbsp;5% since last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card text-white bg-success shadow">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col">
                        <p className="m-0">Peformance</p>
                        <p className="m-0">
                          <strong>65.2%</strong>
                        </p>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-rocket fa-2x" />
                      </div>
                    </div>
                    <p className="text-white-50 small m-0">
                      <i className="fas fa-arrow-up" />
                      &nbsp;5% since last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                



            <StudentInfo/>
                
            <StudentInfo2/>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-5">
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">Forum Settings</p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signature">
                      <strong>Signature</strong>
                      <br />
                    </label>
                    <textarea
                      className="form-control"
                      id="signature"
                      rows={4}
                      name="signature"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="formCheck-1"
                      />
                      <label className="form-check-label" htmlFor="formCheck-1">
                        <strong>Notify me about new replies</strong>
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary btn-sm" type="submit">
                      Save Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-white sticky-footer">
      <div className="container my-auto">
        <div className="text-center my-auto copyright">
          <span>Copyright © Brand 2022</span>
        </div>
      </div>
    </footer>
  </div>
  <a className="border rounded d-inline scroll-to-top" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
</>

        </>
    )
}
